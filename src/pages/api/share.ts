import type {NextApiRequest, NextApiResponse} from 'next'

type User = {
    id: number
}

// Fake users data
const users: User[] = [{id: 1}, {id: 2}, {id: 3}]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
    if (_req.method !== 'POST') {
        res.status(405).send({message: 'Only POST requests allowed'})
        return
    }

    return res.status(200).json(_req.body)
}
