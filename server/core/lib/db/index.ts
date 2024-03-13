import mongoose from 'mongoose';

import { softDeletePlugin } from '@core/lib/db/plugins';
import { log } from '@core/lib/logger';

mongoose.plugin(softDeletePlugin);

const connect = async () => {
  await mongoose.connect(
    `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`,
    {
      autoIndex: true,
      autoCreate: true
    }
  );

  log.info({ methodName: 'db.connect' }, 'mongoose db connected');

  mongoose.connection.on('error', (err) => {
    log.error({
      err,
      methodName: 'mongoose connect',
    });
  });

  if (process.env.NODE_ENV === 'development') {
    mongoose.set('debug', true);
  }
};

const db = {
  mongoose,
  connect,
};

export {
  db,
};
