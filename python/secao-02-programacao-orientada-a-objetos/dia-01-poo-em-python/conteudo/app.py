class Database:
    def __init__(
        self,
        dialect: str,
        user: str,
        host: str,
        password: str,
        database: str,
        port: [str, int] = "",
    ) -> None:
        self.dialect = dialect
        self.user = user
        self.host = host
        self.password = password
        self.database = database
        self.port = port
        self.connection_url

        if not port:
            if dialect == 'mysql':
                port = 3306
            elif dialect == 'postgres':
                port = 5432
            else:
                raise ValueError('No valid dialect or port')

        if type(port) == str and not port.isnumeric():
            raise ValueError('"port" must have a numeric value')

        self.connecton_url = (
            f'{dialect}://{user}:{password}@{host}:{port}/{database}'
        )
