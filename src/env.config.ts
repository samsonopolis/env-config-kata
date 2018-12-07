class EnvConfig {
  mongoDbUri = 'mongodb://';
  mongoDbHost = 'localhost';
  mongoDbUser = null;
  mongoDbPort = null;
  mongoDbPassword = null
  mongoDbName = null;

  buildUri() {
    return `${this.mongoDbUri}${this.getUserName()}${this.getPassword()}${this.getHost()}${this.getPort()}/${this.mongoDbName}`;
  }

  getHost() {
    if (this.mongoDbHost) {
      return `${this.mongoDbHost}`;
    } else {
      return '';
    }

  }

  getUserName() {
    if (this.mongoDbUser) {
      return this.mongoDbUser;
    } else {
      return '';
    }
  }

  getPassword() {
    if (this.mongoDbPassword) {
      return `:${this.mongoDbPassword}@`;
    } else {
      return '';
    }
  }

  getPort() {
    if (this.mongoDbPort) {
      return `:${this.mongoDbPort}`;
    } else {
      return '';
    }
  }
}

export class DevEnvConfig extends EnvConfig {
  mongoDbUser = 'dev_user';
  mongoDbPassword = 'dev_password';
  mongoDbName = 'development';
}

export class TestEnvConfig extends EnvConfig {
  mongoDbName = 'test';
}

export class StagingEnvConfig extends EnvConfig {
  mongoDbHost = 'staging-db.somehost.com';
  mongoDbUser = 'staging_user';
  mongoDbPassword = 'staging_pw';
  mongoDbName = 'app_staging_db';
}

export class ProdEnvConfig extends EnvConfig {
  mongoDbHost = 'prod-db.somehost.com'
  mongoDbUser = 'production_user';
  mongoDbPassword = 'production_password123!'
  mongoDbPort = 35123;
  mongoDbName = 'app_production_db';
}