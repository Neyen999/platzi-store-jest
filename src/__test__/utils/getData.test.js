import getData from "../../utils/getData";

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  }) // Antes de cada test, reset de los mocks
  
  test('Llamar una api y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    getData('https://google.com')
      .then(response => {
        return expect(response.data).toEqual('12345')
      })
    
    return expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
    
  });
})