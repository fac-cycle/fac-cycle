DROP TABLE users cascade;
DROP TABLE items cascade;

CREATE TABLE users (
  id              SERIAL          PRIMARY KEY     NOT NULL,
  name            VARCHAR(30)     NOT NULL,
  email           VARCHAR(100)    NOT NULL,
  facebook_id     VARCHAR(100)    NOT NULL unique,
  profile_img_url VARCHAR(500)    NOT NULL,
  postcode        VARCHAR(8)      NOT NULL,
  lat             VARCHAR(10)     NOT NULL,
  lng             VARCHAR(10)     NOT NULL
);

CREATE TABLE items (
  id              SERIAL PRIMARY KEY NOT NULL,
  title           VARCHAR(140)    NOT NULL,
  description     VARCHAR(1000)   NOT NULL,
  postcode        VARCHAR(8)      NOT NULL,
  lat             VARCHAR(10)     NOT NULL,
  lng             VARCHAR(10)     NOT NULL,
  category        VARCHAR(20)     NOT NULL,
  image_url       VARCHAR(200)    NOT NULL,
  user_id         INT NOT NULL unique references users(id)
);
