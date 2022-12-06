import React from "react";
import { Container } from "react-bootstrap";
import { BookItem } from './bookItem';

export class Books extends React.Component
{
    render()
    {
        return (
            <Container fluid="sm">
                {
                    this.props.books.map(
                        (book) =>
                        {
                            return <BookItem book={book} key={book._id} ReloadData={this.props.ReloadData}></BookItem>
                        }
                    )
                }
            </Container>
        );
    }
}
