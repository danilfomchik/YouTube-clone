import {doc, setDoc} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {v4 as uuidv4} from 'uuid';

import {db, storage} from '@/app/firebase/firebase-config';
import {IDataBaseUser} from '@/app/redux/auth/types';

export const createNewImageName = (file: File | undefined) => {
    const imageName = `${uuidv4()}.${file?.name?.split('.')?.pop()}`;

    return imageName;
};

export const onAddUserToDatabase = async (user: IDataBaseUser, userId: string) => {
    const userRef = doc(db, 'users', userId);

    await setDoc(
        userRef,
        user,
        // if merge = false excited object overrides, if = true - add new fields
        {merge: true},
    );
};

export const onAddImageToStorage = async (file: File | undefined, userId: string) => {
    if (file?.name) {
        const imageName = createNewImageName(file);
        const storageRef = ref(storage, `profiles/${userId}/${imageName}`);

        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);

        return url;
    }

    return '';
};
