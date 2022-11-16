import { Component } from 'react';
import { Card } from 'react-bootstrap';

export class BookItem extends Component
{
    render()
    {
        return (
            <div style={{ display: "flex", justifyContent: "center", padding: "1rem 0" }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.book.thumbnailUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.book.title}</Card.Title>
                        <Card.Text>by <b>{this.props.book.author}</b></Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
