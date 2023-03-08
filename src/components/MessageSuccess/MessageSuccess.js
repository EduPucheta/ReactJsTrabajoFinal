import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MessageSuccess = ({ purchaseID }) => {
	return (
		<Stack sx={{ width: '95%' }} spacing={2} className="flex justify-center items-center">
			<Alert severity='success'>
				Gracias por la compra! Tu id de transacción es: {purchaseID}
			</Alert>
		</Stack>
	);
};

export default MessageSuccess;