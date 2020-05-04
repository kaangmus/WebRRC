<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <link rel="icon" href="{{asset('images/logo.jpeg')}}" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
        name="description"
        content="Web site created using create-react-app"
    />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-164676734-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-164676734-1');
    </script>
    <link rel="apple-touch-icon" href="{{asset('logo192.png')}}" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="{{asset('manifest.json')}}" />

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,700,900|Roboto+Mono:300,400,500">
    <link rel="stylesheet" href="{{asset('radios/fonts/icomoon/style.css')}}">

    <link rel="stylesheet" href="{{asset('radios/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('radios/css/magnific-popup.css')}}">
    <link rel="stylesheet" href="{{asset('radios/css/jquery-ui.css')}}">
    <link rel="stylesheet" href="{{asset('radios/css/owl.carousel.min.css')}}">
    <link rel="stylesheet" href="{{asset('radios/css/owl.theme.default.min.css')}}">
    <link rel="stylesheet" href="{{asset('radios/css/bootstrap-datepicker.css')}}">
    <link rel="stylesheet" href="{{asset('radios/css/mediaelementplayer.css')}}">
    <link rel="stylesheet" href="{{asset('radios/css/animate.css')}}">
    <link rel="stylesheet" href="{{asset('radios/fonts/flaticon/font/flaticon.css')}}">
    <link rel="stylesheet" href="{{asset('radios/css/fl-bigmug-line.css')}}">
    <link rel="stylesheet" href="{{asset('radios/css/aos.css')}}">
    <link rel="stylesheet" href="{{asset('radios/css/style.css')}}">
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>Radio Regione Campania</title>
</head>
<body>


@yield('content')

<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/it_IT/sdk.js#xfbml=1&version=v6.0&appId=194721887735996&autoLogAppEvents=1"></script>
<script src="{{asset('radios/js/jquery-3.3.1.min.js')}}"></script>
<script src="{{asset('radios/js/jquery-migrate-3.0.1.min.js')}}"></script>
<script src="{{asset('radios/js/jquery-ui.js')}}"></script>
<script src="{{asset('radios/js/popper.min.js')}}"></script>
<script src="{{asset('radios/js/bootstrap.min.js')}}"></script>
<script src="{{asset('radios/js/owl.carousel.min.js')}}"></script>
<script src="{{asset('radios/js/mediaelement-and-player.min.js')}}"></script>
<script src="{{asset('radios/js/jquery.stellar.min.js')}}"></script>
<script src="{{asset('radios/js/jquery.countdown.min.js')}}"></script>
<script src="{{asset('radios/js/jquery.magnific-popup.min.js')}}"></script>
<script src="{{asset('radios/js/bootstrap-datepicker.min.js')}}"></script>
<script src="{{asset('radios/js/aos.js')}}"></script>
<script src="{{asset('radios/js/circleaudioplayer.js')}}"></script>
<script src="{{asset('radios/js/main.js')}}"></script>
</body>
</html>

