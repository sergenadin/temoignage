import './App.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import abdullahAlMansourImage from './images/Abdullah Al-Mansour.png';
import ahmedBenSalahImage from './images/ahmed ben salah.jpg';
import leilaMansouriImage from './images/Leila Mansouri.jpeg';
import karimAmiriImage from './images/Karim Amiri.jpeg';
import fatmaAbdelNasserImage from './images/Fatma Abdel Nasser.jpg';



const testimonials = [
  {
    name: 'Ahmed Ben Salah',
    country: 'Maroc',
    text:
      "Je suis extrêmement satisfait des services du Laboratoire Monétaire. Leur expertise et leur professionnalisme ont été cruciaux pour garantir la qualité de nos billets ayant dépensé plus de 5 ans derrière des incapables. Ils ont été un partenaire essentiel dans notre réussite. Que le bonheur vous accompagne inchaalah.",
      image: ahmedBenSalahImage,
      description: ".",
      likes: 100,
      likeStatus: true,
  },
   {
    name: 'Leila Mansouri',
    country: 'Tunisie',
    text:
      "Le Laboratoire Monétaire a dépassé toutes mes attentes. Leur équipe dévouée a travaillé sans relâche pour répondre à nos besoins spécifiques. Leurs résultats ont été impeccables, et je recommande vivement leurs services à toute entreprise.",
      image: leilaMansouriImage,
      description: ".",
      likes: 63,
      likeStatus: true,
    },
  {
    name: 'Karim Amiri',
    country: 'Algérie',
    text:
      "Le professionnalisme du Laboratoire Monétaire est incomparable. Leur approche scientifique et leur engagement envers l'excellence ont été remarquables. Nous sommes reconnaissants pour leur contribution à notre succès. Nous souhaitons une collaboration fraternelle si Dieu le veut.",
      image: karimAmiriImage,
      description: ".",
      likes: 98,
      likeStatus: true,
    },
  {
    name: 'Fatma Abdel Nasser',
    country: 'Égypte',
    text:
      "Je suis pleinement satisfaite des services du Laboratoire Monétaire. Leur expertise technique et leur réactivité ont été impressionnantes. Leurs recommandations ont été précieuses pour notre entreprise, soyez bénis.",
      image: fatmaAbdelNasserImage,
      description: ".",
      likes: 204,
      likeStatus: true,
  },
  {
    name: 'Abdullah Al-Mansour',
    country: 'Arabie saoudite',
    text:
      "Le Laboratoire Monétaire a joué un rôle crucial dans notre processus de nettoyage de nos billets après des longues recherches et dépenses inutiles. Leur professionnalisme et leur expertise ont enfin assuré la conformité de nos billets avec les normes internationales. Nous sommes extrêmement reconnaissants pour leur assistance.",
      image: abdullahAlMansourImage,
      description: ".",
      likes: 166,
      likeStatus: true,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  card: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContent: {
    flex: '1',
  },
  cardMedia: {
    width: 150,
    height: 150,
    objectFit: 'cover',
    marginRight: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
    alignSelf: 'flex-start',
    width: 'auto',
  },
}));

const Testimonial = ({ name, country, text, image, description, likes, likeStatus }) => {
  const classes = useStyles();

  const handleLike = () => {
  };

  const handleThumbsUp = () => {
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        image={image}
        alt={`${name}'s picture`}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6">{name} - {country}</Typography>
        <Typography variant="body1">{text}</Typography>
        <Typography variant="body2">{description}</Typography>
        <div>
          <IconButton onClick={handleLike} color={likeStatus ? "secondary" : "default"}>
            <FavoriteIcon />
          </IconButton>
          <Typography variant="body2">{likes}</Typography>
          <IconButton onClick={handleThumbsUp}>
            <ThumbUpIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialForm = ({ onAddTestimonial }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTestimonial({ name, country, text });
    setName('');
    setCountry('');
    setText('');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField
        label="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Pays"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      />
      <TextField
        label="Témoignage"
        value={text}
        onChange={(e) => setText(e.target.value)}
        multiline
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.submitButton}
      >
        Ajouter Témoignage
      </Button>
    </form>
  );
};

const Testimonials = () => {
  const classes = useStyles();
  const [allTestimonials, setAllTestimonials] = useState(testimonials);

  const handleAddTestimonial = (newTestimonial) => {
    setAllTestimonials([...allTestimonials, newTestimonial]);
  };

  return (
    <Container className={classes.root} maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Témoignages
      </Typography>
      {allTestimonials.map((testimonial, index) => (
        <div key={index} className={classes.card}>
          <Testimonial {...testimonial} />
        </div>
      ))}
      <Typography variant="h6" gutterBottom>
        Ajouter un témoignage
      </Typography>
      <TestimonialForm onAddTestimonial={handleAddTestimonial} />
    </Container>
  );
};

export default Testimonials;