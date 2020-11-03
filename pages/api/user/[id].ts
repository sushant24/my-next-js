import { NextApiHandler } from "next";

const DUMMY_DATA = [{
  id: '1',
  name: 'John Doe',
  email: 'jdoe@super.org',
}, {
  id: '2',
  name: 'Martha Roe',
  email: 'martharoe1@world.org',
}
]

const user:NextApiHandler = (req, res) => {
  const { id } = req.query;
  const user = DUMMY_DATA.find(item => String(item.id) === String(id));
  if(user) {
    res.status(200).json(user);
  } else {
    res.status(404).end();
  }
}

export default user;