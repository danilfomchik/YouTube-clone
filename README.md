# README

## Getting started
### Prepare for running app local

-   Node.js vesion >= 20.x.x and npm version >= 10.x.x required
-   Run `npm install`<br />
-   Run `npm run dev` <br />

### Running tests
In current project we are using [Vitetest](https://vitest.dev/) framework.

The name of the test should follow pattern `{component-name}.test.ts`

In order to run your tests use script: `npm run test`<br />

For more details refer to [Next.js official doc](https://nextjs.org/docs/app/building-your-application/testing/vitest).

## React Component code styleguide

### Component structure

    import React, {useEffect, useState, useMemo, useCallback} from 'react';
    import {useSelector} from 'react-redux';
    import lib from 'lib';

    import {fetchData} from '../fetchData'
    import {selectList, selectLoading} from '../selectors'
    import {useAppDispatch} from '../../store';
    import hooks from './hooks';
    import utils from './utils';
    import helper from './helper';
    import config from './config';
    import constants from './constants';
    import Component from './Component';
    import Button from '../common/Button';
    import IValues from './types';

    const MyComponent = () => {
        const [editMode, setEditMode] = useState(false);
        const [values, setValues] = useState<IValues[]>([]);

        const dispatch = useAppDispatch();
        const list = useSelector(selectList)
        const isLoading = useSelector(selectLoading(slicesName, thunksName || thunksNames[]));

        const valuesIds = useMemo(() => values.map(value => value.id), [values]);

        ...hooks, ...localStorage, ...constants;

        const getData = useCallback(() => {}, []);

        const handleClick = useCallback((item) => setValues(item),[]);

        useEffect(() => {
            dispatch(fetchData());
        }, [dispatch]);

        return (
            <>
                <Component getData={getData} />
                <Button onClick={handleClick}>Click</Button>
            </>
        );
    };

    export default MyComponent;

### Project folder/file structure

    components
        common
            Button
                index.ts
                Button.tsx
                ...otherFiles
            Modal
            ...
        login
           page.tsx
           layout.tsx
           ...otherFiles

### Branch naming

-   Use git-flow for naming branch https://danielkummer.github.io/git-flow-cheatsheet/
-   Commit message should include branch name.
