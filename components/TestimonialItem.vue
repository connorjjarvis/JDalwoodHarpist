<template>
    <div class="testimonial testimonial_style--1">
        <div class="content">
            <p v-html="testimonial.text"></p>
            <div class="testimonial-info">
                <div class="clint-info">
                    <h6>{{ testimonial.name }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['testimonial']
    };
</script>