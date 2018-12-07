import { DevEnvConfig, TestEnvConfig, StagingEnvConfig, ProdEnvConfig } from './env.config';

export class EnvConfigFactory {
  static build(env) {
    switch (env) {
      case 'development':
        return new DevEnvConfig();
      case 'test':
        return new TestEnvConfig();
      case 'staging':
        return new StagingEnvConfig();
      case 'production':
        return new ProdEnvConfig();
    }
  }
}