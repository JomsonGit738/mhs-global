type LazyModule<T> = { default: T };

type Importer<T> = () => Promise<LazyModule<T>>;

const RETRY_DELAYS_MS = [1000, 2500, 5000];
const RELOAD_GUARD_KEY = "mhs_chunk_retry_reload";

const wait = (delayMs: number): Promise<void> =>
  new Promise((resolve) => {
    window.setTimeout(resolve, delayMs);
  });

const isChunkLoadError = (error: unknown): boolean => {
  if (!(error instanceof Error)) {
    return false;
  }

  return (
    error.name === "ChunkLoadError" ||
    /chunk/i.test(error.message) ||
    /loading css chunk/i.test(error.message)
  );
};

const reloadOnce = (): never => {
  try {
    const hasReloaded = window.sessionStorage.getItem(RELOAD_GUARD_KEY) === "1";

    if (!hasReloaded) {
      window.sessionStorage.setItem(RELOAD_GUARD_KEY, "1");
      window.location.reload();
    }
  } catch {
    window.location.reload();
  }

  throw new Error("Chunk reload triggered");
};

export const lazyWithRetry = async <T>(
  importer: Importer<T>
): Promise<LazyModule<T>> => {
  try {
    return await importer();
  }
  catch (error) {
    let lastError = error;

    for (const delayMs of RETRY_DELAYS_MS) {
      await wait(delayMs);

      try {
        return await importer();
      } catch (retryError) {
        lastError = retryError;
      }
    }

    if (isChunkLoadError(lastError)) {
      reloadOnce();
    }

    throw lastError;
  }
};
