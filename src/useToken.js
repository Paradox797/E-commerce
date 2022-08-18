import { jsonEval } from "@firebase/util";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, settoken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`http://localhost:5000/as/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)


            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    settoken(accessToken);
                })
        }
    }, [user]);
    return [token];

}
export default useToken;