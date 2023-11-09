<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    {{-- added for registration, not sure if needed, without this it doesn't work --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>MI6</title>
    <style>
          @import url("https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Noto+Serif+Display:wght@200;400;700&display=swap");
    </style>
    @vite('resources/css/homepage.scss')
</head>
    <body>
    
    <div id="people-of-interest-app"></div>
    
    @vite('resources/js/people_of_interest.jsx')



    </body>
</html>