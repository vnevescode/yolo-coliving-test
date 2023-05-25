import { useEffect, useState} from 'react';
import axios from 'axios';

const PropertyFecthData = () => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const { data: response } = await axios.get('https://6f80xdhs4f.execute-api.us-east-1.amazonaws.com/dev/api/v1/property');
            setData(response);
          } catch (error) {
            console.error(error)
          }
          setLoading(false);
        };
    
        fetchData();
      }, []);

    return ({
        data,
        loading,
    })
}

export default PropertyFecthData