import { EnvConfigFactory } from './env.factory';

export const getMongoDbUri = (env?: string) => {
  let e = env ? env : process.env.NODE_ENV;

  const config = EnvConfigFactory.build(e);

  return config.buildUri();
}
