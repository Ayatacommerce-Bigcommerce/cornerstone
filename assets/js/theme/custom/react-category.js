import React from 'react'
import ReactDOM from 'react-dom'
import PageManager from '../page-manager';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const HelloWorld = (props) => (
    <div>
        <p>Hello World from React!</p>
        <p>Here are my props:</p>
        <ul>
            {
                props.context.category.products.map(product=>{
                    return (
                        <Card sx={{ minWidth: 275 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={product.image.data}
                                alt={product.image.alt}
                            />
                          <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                              {product.category}
                            </Typography>
                            <Typography variant="h5" component="div">
                              {product.name}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              {product.price.with_tax.formatted}
                            </Typography>
                            <Typography variant="body2">
                              {product.summary}
                              <br />
                              {'"Availability: "'+product.availability}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button color="primary" variant="contained" size="small"><a style={{ textDecoration: 'none', color: 'white' }} href={product.add_to_cart_url}>Add to cart</a></Button>
                          </CardActions>
                        </Card>
                    );
                })
            }
        </ul>
    </div>
)

export default class ReactDemo extends PageManager {
    onReady() {
        const container = $('#root')[0]
        ReactDOM.render(<HelloWorld context={this.context}/>, container)
    }
}