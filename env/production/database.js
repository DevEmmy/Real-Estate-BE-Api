const parse = require('pg-connection-string').parse;
const config = parse(postgres://dgnmompoamdtvt:6ef863ed291dd7bf0507b22bfffbd88dc58e6ef06325347958e9108374f9076f@ec2-34-231-63-30.compute-1.amazonaws.com:5432/d3ni1fnh3b4u3b);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
