import React from 'react';

import { Params } from '@/utils/Types';
import { mockData } from '@/utils/mockData';

const Product = ({ params }: Params) => {
	console.log(params.product);

	return <div>page</div>;
};

export default Product;
