    USE rideforxd;


    CREATE TABLE users(
        id BIGINT PRIMARY KEY AUTO_INCREMENT,
        email VARCHAR(180) NOT NULL UNIQUE,
        name VARCHAR(90) NOT NULL,
        lastname VARCHAR(90) NOT NULL,
        phone VARCHAR(90) NOT NULL UNIQUE,
        image VARCHAR(255) NULL,
        password VARCHAR(90) NOT NULL
        ,
        created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

    CREATE TABLE roles(
        id BIGINT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(90) NOT NULL UNIQUE,
        image VARCHAR(255) NULL,
        route VARCHAR(180) NOT NULL,
        created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

    INSERT INTO roles(
        name,
        route,
        created_at,
        updated_at
    )
    VALUES(
        'Pasajero',
        '/client/orders/list',
        '2022-03-27',
        '2022-03-27'
    );

    INSERT INTO roles(
        name,
        route,
        created_at,
        updated_at
    )
    VALUES(
        'Conductor',
        '/conductor/orders/list',
        '2022-03-27',
        '2022-03-27'
    );

    INSERT INTO roles(
        name,
        route,
        created_at,
        updated_at
    )
    VALUES(
        'Empresas',
        '/admin/orders/list',
        '2022-03-27',
        '2022-03-27'
    );

    CREATE TABLE user_has_roles(
        id_user BIGINT NOT NULL,
        id_rol BIGINT NOT NULL,
         created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY(id_user) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY(id_rol) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE,
        PRIMARY KEY(id_user, id_rol)
    );

        CREATE TABLE empresas(
        id BIGINT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(180) NOT NULL,
        description TEXT NOT NULL,
        image VARCHAR(255) NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NULL,
        lat DOUBLE PRECISION NOT NULL,
        lng DOUBLE PRECISION NOT NULL,
        id_user BIGINT NOT NULL,
        created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY(id_user) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
    );


      CREATE TABLE conductor(
        id BIGINT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(180) NOT NULL UNIQUE,
        description TEXT NOT NULL,
        email VARCHAR(180) NOT NULL UNIQUE,
        password VARCHAR(90) NOT NULL
        price VARCHAR(10) NOT NULL,
        patente VARCHAR(20) NOT NULL UNIQUE,
        image1 VARCHAR(255) NULL,
        image2 VARCHAR(255) NULL,
        image3 VARCHAR(255) NULL,
        id_empresa BIGINT NOT NULL,
         created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY(id_empresa) REFERENCES empresas(id) ON UPDATE CASCADE ON DELETE CASCADE
    );


    CREATE TABLE conductor_has_roles(
        id_conductor BIGINT NOT NULL,
        id_rol BIGINT NOT NULL,
         created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY(id_conductor) REFERENCES conductor(id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY(id_rol) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE,
        PRIMARY KEY(id_conductor, id_rol)
    )


  
    CREATE TABLE address(
        id BIGINT PRIMARY KEY AUTO_INCREMENT,
        address VARCHAR(255) NOT NULL,
        neighborhood VARCHAR(180) NOT NULL,
        lat DOUBLE PRECISION NOT NULL,
        lng DOUBLE PRECISION NOT NULL,
        created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        id_user BIGINT NOT NULL,
        FOREIGN KEY(id_user) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

    CREATE TABLE orders(
        id BIGINT PRIMARY KEY AUTO_INCREMENT,
        id_client BIGINT NOT NULL,
        id_conductor BIGINT NULL,
        id_address BIGINT NOT NULL,
        lat DOUBLE PRECISION,
        lng DOUBLE PRECISION,
        status VARCHAR(90) NOT NULL,
        timestamp BIGINT NOT NULL,
         created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY(id_client) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY(id_conductor) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY(id_address) REFERENCES address(id) ON UPDATE CASCADE ON DELETE CASCADE
    ); 

    CREATE TABLE order_has_conductor(
        id_order BIGINT NOT NULL,
        id_conductor BIGINT NOT NULL,
        quantity BIGINT NOT NULL,
         created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
		updated_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY(id_order, id_conductor),
        FOREIGN KEY(id_order) REFERENCES orders(id) ON UPDATE CASCADE ON DELETE CASCADE,
        FOREIGN KEY(id_conductor) REFERENCES conductor(id) ON UPDATE CASCADE ON DELETE CASCADE
    );

    ALTER TABLE user_has_roles
    ADD COLUMN is_active BOOLEAN NOT NULL DEFAULT false,
    MODIFY updated_at TIMESTAMP 
	DEFAULT CURRENT_TIMESTAMP 
	NOT NULL;

    CREATE TABLE driver_ratings (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    id_driver BIGINT NOT NULL,
    id_client BIGINT NOT NULL,
    rating INT NOT NULL,
    comment TEXT,
     created_at TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_driver) REFERENCES conductor (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (id_client) REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE
);

ALTER TABLE conductor
ADD COLUMN average_rating  DECIMAL(3, 2) DEFAULT 0.00,
ADD COLUMN total_ratings INT DEFAULT 0;