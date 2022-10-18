import axios from 'axios';
import { Component } from 'react';
import { Books } from './books';

export class Read extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            books: [
            ]
        }
    }

    componentDidMount()
    {
        // Async get request
        axios.get("https://jsonblob.com/api/jsonblob/1027219693823606784").then(
            (resp =>
            {
                // Update the state
                console.log(resp.data);
                this.setState({ books: resp.data });
            })
        ).catch((err) =>
        {
            console.log(err)
        })
    }

    render()
    {
        return (
            <div >
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}
