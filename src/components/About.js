import Container from 'react-bootstrap/Container';

const About=() => {
    return(
        <Container className= "mt-4">
            <h1>- About -</h1>
            <p>Aplikasi untuk menampilkan daftar actress dan actor papan atas Hollywood dengan fitur search dan bisa meilhat detail </p>
            <p>Nama pembuat : Claudio Mambu</p>
            <p>Menggunakan API dari TheMovieDb dengan endpointnya /person/popular untuk mendapatkan data dari semua actress & actor dan 
                /search/person untuk melakukan search lalu /person/id untuk mendapatakan detail dari tiap actress atau actor, untuk mengakses APInya 
                membutuhkan API Key yang didapatkan setelah mendaftar
            </p>
        </Container>
    );
}

export default About;