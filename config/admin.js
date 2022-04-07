module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '26c15f6383883252b9a31808bc6910c9'),
  },
});
