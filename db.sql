-- public.users definition

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users (
	id_user serial4 NOT NULL,
	"name" varchar(200) NOT NULL,
	last_name varchar(200) NOT NULL,
	username varchar(200) NOT NULL,
	email varchar(200) NOT NULL,
	status varchar(200) NOT NULL,
	created_at timestamp NOT NULL,
	updated_at timestamp NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id_user),
	CONSTRAINT users_un UNIQUE (email),
	CONSTRAINT users_un2 UNIQUE (username)
);