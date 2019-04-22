import * as React from 'react';
import List from '../../partials/List';
import Filters from '../../partials/Filters';
import Header from '../../common/Header';
import './Home.css';

export interface HomeProps {
}

export interface HomeState {
}

export default class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

        this.state = {

        }
    }

    public render() {
        return (
            <>
                <Header />
                <div className="home-container">
                    <Filters />
                    <List />
                </div>
            </>
        );
    }
}




