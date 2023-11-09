<h1>Misison</h1>
<br>
<br>
    <div>
        <h3 class="mission-title">{{mission.name}}</h3>
        <h5 class="mission-year">{{mission.year}}</h5>
        @foreach ($misison.people as $person)
            <li>{{person}}</li>
        @endforeach
            
        <h5 class="mission-outcome">The mission was a {{mission.outcome}}</h5>
        
    </div>