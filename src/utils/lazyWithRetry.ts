type LazyModule<T> = { default: T };

type Importer<T> = () => Promise<LazyModule<T>>;

const RETRY_DELAY_MS = 1200;

const wait = (delayMs: number): Promise<void> =>
  new Promise((resolve) => {
    window.setTimeout(resolve, delayMs);
  });

export const lazyWithRetry = async <T>(
  importer: Importer<T>
): Promise<LazyModule<T>> => {
  try {
    return await importer();
  } catch (error) {
    await wait(RETRY_DELAY_MS);
    return importer();
  }
};
