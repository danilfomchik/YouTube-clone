import AutocompleteControl from '@/app/components/form/AutocompleteControl';
import {useGetSuggestionsQuery} from '@/app/redux/suggestions/api';
import {ISuggestionsProps} from './types';

const Suggestions = ({searchValue, control}: ISuggestionsProps) => {
    const {data: options, isFetching} = useGetSuggestionsQuery(searchValue);

    return (
        <AutocompleteControl
            control={control}
            name="search"
            placeholder="Search"
            options={options ? options[1] : []}
            loading={isFetching}
        />
    );
};

export default Suggestions;
