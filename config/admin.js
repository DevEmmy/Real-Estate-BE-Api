module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '23a6e7dd6d9b6023a24b2430befc9055'),
  },
});
