
    document.addEventListener('DOMContentLoaded', function() {
        const taps = document.getElementById('tabs-value-target')
        const autofarm = document.getElementById('autofarm-value-target')
        const totalSaldo = document.getElementById('coin-value-result-target')
        const taps_auto = document.getElementById('minne_and_taps_target')

        var total_taps = 0
        var total_auto_farm = 0
        var totalSaldoCoin = 10000000
        var total_taps_auto = 0

        document.getElementById('coin-img').addEventListener('click', function() {
            total_taps += 89
            total_taps_auto += 89
            totalSaldoCoin += 89
            taps.innerText = total_taps
            taps_auto.innerText = total_taps_auto
            totalSaldo.innerText = totalSaldoCoin
        });

        setInterval(() => {
            console.log('object');
            total_auto_farm += 78
            total_taps_auto += 78
            totalSaldoCoin += 78
            autofarm.innerText = total_auto_farm
            taps_auto.innerText = total_taps_auto
            totalSaldo.innerText = totalSaldoCoin
        }, 1000);        
    })