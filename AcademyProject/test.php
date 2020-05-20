<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <from action="filmai.php" method="post">
      <div class="container col-lg-5 py-5" id="bilietai">
        <label class="">Filmas</label>
        <select class="browser-default custom-select custom-select-mlg mb-3" name="movie_n">
          <option >Pasirinkti filmą...</option>
          <option value="Kersitojai" >Keršytojai. Pabaiga</option>
          <option value="2">Liūtas Karalius</option>
          <option value="3">Kaip prisijaukinti slibiną 3</option>
        </select>
        <label class="" name="data">Data</label>
        <select class="browser-default custom-select custom-select-mlg mb-3" name="movie_d">
          <option selected>Pasirinkite datą...</option>
          <option value="1" name="2019">2019-05-12</option>
          <option value="2">2019-05-13</option>
          <option value="3">2019-05-14</option>
        </select>
          </select>
        <label class="" name="laikas">Laikas</label>
        <select class="browser-default custom-select custom-select-mlg mb-3" name="movie_t">
          <option selected>Pasirinkite laiką...</option>
          <option value="1" name="15">15:00</option>
          <option value="2">17:00</option>
          <option value="3">18:00</option>
        </select>
        <label class="">Kiekis</label>
        <select class="browser-default custom-select custom-select-mlg mb-3">
          <option selected>Pasirinkite bilietų kiekį...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button type="submit" name="reservSB" class="btn btn-primary">REZERVUOTI BILIETUS</button>
      </div>
    </form>

  </body>
</html>
