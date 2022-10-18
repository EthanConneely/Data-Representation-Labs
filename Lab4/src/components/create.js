import { Component } from 'react';
import { Button } from 'react-bootstrap';

export class Create extends Component
{
    constructor(props)
    {
        super(props);

        // Set default state
        this.state = { title: '', author: '', url: '' };

        // Bind events
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeAuthor = this.changeAuthor.bind(this);
        this.changeUrl = this.changeUrl.bind(this);
    }

    handleSubmit(event)
    {
        event.preventDefault();

        // Alert the user
        alert('A name was submitted: ' + this.state.title);
        alert('A name was submitted: ' + this.state.author);
        alert('A name was submitted: ' + this.state.url);
    }

    changeTitle(event)
    {
        // Update the state from the
        this.setState({ title: event.target.value })
    }

    changeAuthor(event)
    {
        // Update the state from the
        this.setState({ author: event.target.value })
    }

    changeUrl(event)
    {
        // Update the state from the
        this.setState({ url: event.target.value })
    }

    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Add Book Title:</p>
                <input type="text" value={this.state.title} onChange={this.changeTitle} />

                <p>Add Book Author:</p>
                <input type="text" value={this.state.author} onChange={this.changeAuthor} />

                <p>Add Book Page Url:</p>
                <input type="text" value={this.state.url} onChange={this.changeUrl} />
                <br />
                <br />
                <Button type="submit" value="Submit" >Submit</Button>
            </form>
        );
    }
}
