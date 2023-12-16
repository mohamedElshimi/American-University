<template>
    <div class="container mx-auto sm:px-2 px-5">
        <h1 class="title1 text-center my-5">Agents & Partners</h1>
        <p class="lg:text-xl md:text-lg text-base">The American University of Science & Technology (AUST) has given the agency to some institutions to facilitate all educational institutions that want to become a partner of the American University of Science & Technology (AUST) and an accredited training and examination center.</p>
        <p class="lg:text-xl md:text-lg text-base my-5">This is the list of approved agents and partners:</p>
        <div class="w-full overflow-x-scroll my-4">
            <table class="w-full overflow-x-scroll md:text-base text-sm">
                <thead class="bg-primary text-white">
                    <tr>
                        <th class="rounded-tl-md">REGION</th>
                        <th>COUNTRY</th>
                        <th>STATE / GOVERNMENT</th>
                        <th>NAME</th>
                        <th class="w-[14.2%]">LOGO</th>
                        <th>CONTACT INFORMATION</th>
                        <th class="rounded-tr-md">AUTHORIZATION</th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr>
                        <td>Europe</td>
                        <td>United Kingdom</td>
                        <td></td>
                        <td>European College for Science & Arts</td>
                        <td><img src="../assets/ECSA-logos-png.jpg" alt="ECSA Logo"></td>
                        <td>
                            <span>Address: 35 Factory Street, Loughborough, Leicestershire, England, United Kingdom.</span>
                            <span>Website: www.EuropeanCollege-edu.uk</span>
                            <span>Email: info@EuropeanCollege-edu.uk</span>
                        </td>
                        <td>Agent & Partner</td>
                    </tr>
                    <tr>
                        <td>Middle East & Africa</td>
                        <td>Egypt</td>
                        <td></td>
                        <td>Canadian Institute For Training & Development</td>
                        <td><img src="../assets/citd-logo-png.jpg" alt="ECSA Logo"></td>
                        <td>
                            <span>Address: 35 Elobour Buildings,Salah Salem St,Cairo,Egypt</span>
                            <span>Website: www. citdtraining.com</span>
                            <span>Email: contactus@ citdtraining.com</span>
                        </td>
                        <td>Agent & Partner</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Egypt</td>
                        <td></td>
                        <td>Diplomatic Training Center</td>
                        <td><img src="../assets/Diplomatic.jpg" alt="ECSA Logo"></td>
                        <td>
                            <span>Address: 51 Mohi El Din Abu El Ezz Street - Dokki -Giza,-Egypt</span>
                            <span>Website: www.diplomaticeg.com</span>
                            <span>Email: diplomatictraining.eg@gmail.com</span>
                        </td>
                        <td>Partner</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name:'AgentsNpartners',
    }
</script>

<style scoped>
table{
    text-wrap: wrap;
}
table,
tr,
td,th{
    @apply p-2
}
tbody tr:nth-of-type(even){
    @apply bg-gray-200
}
</style>