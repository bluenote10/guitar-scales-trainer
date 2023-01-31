<script lang="ts">
  export let fontSize: number;
</script>

<kbd class="kbd" style:--fontSize={`${fontSize}px`}><slot /></kbd>

<style>
  .kbd {
    font-size: var(--fontSize);

    background-color: rgb(227, 230, 232);

    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-end-end-radius: 3px;
    border-end-start-radius: 3px;
    border-start-end-radius: 3px;
    border-start-start-radius: 3px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    border-bottom-color: rgb(159, 166, 173);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(159, 166, 173);
    border-left-style: solid;
    border-left-width: 1px;
    border-right-color: rgb(159, 166, 173);
    border-right-style: solid;
    border-right-width: 1px;
    border-top-color: rgb(159, 166, 173);
    border-top-style: solid;
    border-top-width: 1px;
    box-shadow: rgba(12, 13, 14, 0.15) 0px 1px 1px 0px, rgb(255, 255, 255) 0px 1px 0px 0px inset;
    margin-bottom: 0px;
    margin-left: 1.1px;
    margin-right: 1.1px;
    margin-top: 0px;
    padding-bottom: 1.1px;
    padding-left: 6.6px;
    padding-right: 6.6px;
    padding-top: 1.1px;
  }
</style>
