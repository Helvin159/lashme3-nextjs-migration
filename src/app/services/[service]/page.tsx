import { Params } from '@/utils/Types';

const Service = ({ params }: Params) => {
	return <h1>{params.service} Service Page</h1>;
};

export default Service;
