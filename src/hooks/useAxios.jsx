import {useState} from 'react'
import axios from 'axios';

const useAxios = () => {
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios(
                'https://www.themealdb.com/api/json/v1/1/random.php'
            )
            setResponse(res.data.meals[0])
        }
        catch (err) {
            setError(err)
        }
        finally {
            setLoading(false)
        }
    }

  return {
      response,
      loading, 
      error,
      fetchData
  }
}

export default useAxios