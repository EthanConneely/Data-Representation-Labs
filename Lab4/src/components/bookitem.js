import { Component } from 'react';

export class BookItem extends Component
{
    render()
    {
        return (
            <div >
                <h1>{this.props.book.title}</h1>
                <img src={this.props.book.thumbnailUrl}></img>

                <div>
                    {
                        this.props.book.authors.map(author => (
                            <span>{author},</span>
                        ))
                    }
                </div>
            </div>
        );
    }
}
