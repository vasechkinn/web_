from fastapi import FastAPI, Query, HTTPException
from countrys import country_dict
from fastapi.responses import FileResponse, HTMLResponse

app = FastAPI()

@app.get('/', response_class = HTMLResponse)
async def welcome():
    return """
    <html>
        <body>
            <h1>Доступные маршруты</h1>
            <ul>
                <li><a href="/items/1,2,3,4">/items/1,2,3,4</a></li>
                <li><a href="/users/Max/39">/users/Max/39</a></li>
                <li><a href="/users?name=Max&age=39">/users?name=Max&age=39</a></li>
                <li><a href="/country/Russia?limit=3">
                    /country/Russia?limit=3
                    </a>
                    <ul>
                    Список доступных стран
                    <li><a href="/country/USA?limit=3"> USA </a></li>
                    <li><a href="/country/Germany?limit=3"> Germany </a></li>
                    <li><a href="/country/France?limit=3"> France </a></li>
                    <li><a href="/country/Japan?limit=3"> Japan </a></li>
                    <li><a href="/country/Brazil?limit=3"> Brazil </a></li>
                    <li><a href="/country/Australia?limit=3"> Australia </a></li>
                    <li><a href="/country/India?limit=3"> India </a></li>
                    </ul>
                </li>
            </ul>
            <p>Или откройте <a href="/docs">документацию Swagger</a></p>
        </body>
    </html>
    """

# nonono
@app.get('/favicon.ico')
async def ico():
    return FileResponse('img/logo.avif')

# nonono
@app.get('/name')
async def hello_friend(name: str = None) -> dict:
    if name:
        return {'hello': f'{name}'}
    return {'hello': 'world'}

# detail_view() будет принимать GET-запрос по маршруту /product/<id>
@app.get('/product/{id}')
async def detail_view(id: int) -> dict:
    return {'product': f'stock number {id}'}

# users() будет принимать GET-запрос по маршруту /users/<name>/<age>
#/users/Alex/34
@app.get('/users/{name}/{age}')
async def user_age(name: str, age: int) -> dict:
    return {'user': f'name: {name}, age: {age}'}

# /users?name=Max&age=39
@app.get('/users')
async def users(name: str | None = Query(default=None, min_length=2), age: int | None = Query(default=None, ge=0)) -> dict:
    if name is None and age is None:
        return {'user name': 'NoName',
                'age': 'NoAge'}
    
    elif name is None and age is not None:
        return {'user name': 'NoName',
                'age': age}
    
    elif name is not None and age is None:
        return {'user name': name,
                'age': 'NoAge'}
    else:
        return {'user name': name,
                'age': age}

# nonono
@app.get('/items/{items}')
async def items(items: str) -> dict:
    res = {}
    items = items.split(',')
    print(items)

    for i in range(len(items)):
        res[i] = f'№ {items[i]}'

    return res

# list_cities() будет принимать GET запрос по маршруту /country/<country>
@app.get('/country/{country}')
async def list_cities(country: str, limit: int | None = Query(default=None, le=10, ge=0)) -> dict:

    if country not in country_dict:
        raise HTTPException(status_code=404, detail='not found')
    
    if limit is None:
        return {'country': country,
                'cities': country_dict[country]}
    
    return {'country': country,
                'cities': country_dict[country][:limit]}