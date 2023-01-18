
import { AppStore } from '@/redux/models';
import { useSelector } from 'react-redux';

export const useStore = () => {

    const store = useSelector((state: AppStore) => state)

    return {
        ...store
    }
}

