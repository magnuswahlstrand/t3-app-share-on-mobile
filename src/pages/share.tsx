import type {NextPage} from "next";
import {useRouter} from 'next/router'


const Share: NextPage = () => {
    const router = useRouter()
    const query = router.query

    return (
        <div>
            <p>
                {JSON.stringify(query)}
            </p>
        </div>
    );
};

export default Share;
