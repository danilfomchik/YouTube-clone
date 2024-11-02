import {doc, setDoc} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';

import {db, storage} from '@/app/firebase-config';
import {IDataBaseUser} from '@/app/redux/auth/types';
import {createNewImageName} from '@/app/redux/auth/utils';

// uid - id of a document in database
export const useFirebase = () => {
    // calls when user sign in first time
    const onAddUserToDatabase = async (user: IDataBaseUser, userId: string) => {
        const userRef = doc(db, 'users', userId);

        await setDoc(
            userRef,
            user,
            // if merge = false excited object overrides, if = true - add new fields
            {merge: true},
        );
    };

    const onAddImageToStorage = async (file: File | undefined, userId: string) => {
        if (file?.name) {
            const imageName = createNewImageName(file);
            const storageRef = ref(storage, `profiles/${userId}/${imageName}`);

            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);

            return url;
        }

        return '';
    };

    return {
        onAddUserToDatabase,
        onAddImageToStorage,
    };
};
