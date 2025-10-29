<template>
  <div class="row">
    <div class="row-content">Candon Campus</div>
	<br>
	<div class="list">
		<ul>
			BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
		</ul>
	</div>
	<div class="description">
		Program Description:
	</div>
	<div class="text-description">
		<strong>Bachelor of Science in Information Technology</strong> program includes the study of application and effect of information
            technology to organization. Graduate of the program should be able
            to implement an information system, which considers complex
            technological and organizational factors affecting it. These include
            components, tools, techniques, strategies, methodologies, etc.
            Graduates are able to help an organization determine how information
            and technology-enabled business process can be used as strategic
            tool to achieve a competitive advantage. As a result, IS
            professionals require a sound understanding of organizational
            principles and practices so that they can serve as an effective
            bridge between the technical and management/user communities with an
            organization.
	</div>
	<div class="description">
		Program Outcomes:
	</div>
	<div class="text-description">
		At the end of the Program, the <strong>BSIT</strong> graduate should be able to:
	</div>
	<div class="outcome-sub">The program prepares students to be Information Systems Officers or professionals
both local and global context who are expected to design and implement solutions that
integrate Information Technology with business processes. A sound understanding of
organizational principles and practices so that they can serve as effective bridges between
the technical and management communities within the organization; as well as engaged in
life-long learning endeavors which are capable of contributing in research, extension and
resource generation in the field of Information Systems.</div>
		<div class="track">
			<router-link to="/">Information Technology Track</router-link>
		</div>
</div>
</template>
<script>
export default {
  name: 'BachelorofScienceinInformationTechnology'
}
</script>

<style>
.row {
  padding: 20px;
  font-size: 30px;
  font-weight: 30;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.row-content {
  text-align: center;
  color: rgb(0, 0, 0);
}

.list{
	font-size: 35px;
	font-weight: bold;
	font-family: 'Roboto Condensed', sans-serif;
	margin-left: 20px;
	color: rgb(175, 93, 6);
	margin-top: 10px;
}

.description{
	padding: 10px;
	font-size: 21px;
	font-family: 'PT Sans Narrow', sans-serif;
	margin-left: 30px;
	font-weight: bold;
}

.text-description {
	font-size: 20px;
	text-align: justify;
	font-family: 'Times New Roman', Times, serif;
	margin-left: 55px;
	margin-right: 50px;
}

.outcome-sub {
	font-size: 20px;
	text-align: justify;
	font-family: 'Times New Roman', Times, serif;
	margin-left: 97px;
	margin-right: 50px;
}

.track{
	font-size: 20px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.track a{
	text-decoration: none;
	margin-left: 110px;
	margin-right: 50px;
}

.track a:hover{
	color: #a1900e;
}
</style>
