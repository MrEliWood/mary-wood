// external
import { useState } from 'react';
import { LockOpen1Icon } from '@radix-ui/react-icons';

// internal
import { Button } from '@/components';
import { CPWModal } from '..';

export default function CPWButton() {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<Button.UI style='ghost' type='secondary' onClick={() => setModalVisible(true)}>
				Change Password
				<LockOpen1Icon width='16' height='16' />
			</Button.UI>

			<CPWModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
		</>
	);
}
