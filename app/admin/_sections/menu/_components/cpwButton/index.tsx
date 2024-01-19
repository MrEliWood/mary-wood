// external
import { useState } from 'react';
import { UploadIcon } from '@radix-ui/react-icons';

// internal
import { Button } from '../../../../_components';
import { CPWModal } from '..';
import { getKey } from '@/utils';

// variable
const currentID = 'current_input__' + getKey();

export default function CPWButton() {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<Button style='ghost' onClick={() => setModalVisible(true)}>
				Change Password
				<UploadIcon width='16' height='16' />
			</Button>

			<CPWModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
		</>
	);
}
