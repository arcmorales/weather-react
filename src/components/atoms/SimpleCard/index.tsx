import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

interface Forecast {
  date: string
  condition?: string
  img?: string
  temp?: string
}

const SimpleCard: React.FC<Forecast> = ({ date, condition, img, temp }) => {
  const classes = useStyles()
  // const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="h2">
          {condition}
        </Typography>
        <img src={img} />
        <Typography className={classes.pos} color="textSecondary">
          {temp} <span>&#8451;</span>
        </Typography>
        {/*<Typography variant="body2" component="p">*/}
        {/*  well meaning and kindly.*/}
        {/*  <br />*/}
        {/*  {'"a benevolent smile"'}*/}
        {/*</Typography>*/}
      </CardContent>
      {/*<CardActions>*/}
      {/*  <Button size="small">Learn More</Button>*/}
      {/*</CardActions>*/}
    </Card>
  )
}

export default SimpleCard
