"use client"
import useSWR from 'swr'


const Dashboard = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
    if (error) {return <div>Error loading data</div>}
    if (!data) {return <div>Loading...</div>}
    return (
        <div>
            {
                data.map(item => (
                    <p key={item.id}>{item.id}</p>
                ))
            }
        </div>
    );
};

export default Dashboard;
