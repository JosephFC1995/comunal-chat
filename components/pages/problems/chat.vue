<template>
  <div class="problems--list--chat">
    <div
      class="problems--list--chat--wait"
      v-if="!$store.state.problems.problemSelected"
    >
      <img src="/images/wait.png" />
    </div>
    <div
      class="problems--list--messages"
      v-if="$store.state.problems.problemSelected"
    >
      <div class="problems--list--messages--content">
        <div class="problems--list--messages--content--message receive">
          {{
            $store.state.problems.problemSelected
              ? $store.state.problems.problemSelected.problem_subtype.name
              : ''
          }}
        </div>
      </div>
    </div>
    <div
      class="problems--list--input"
      v-if="$store.state.problems.problemSelected"
    >
      <input
        type="text"
        class="problems--list--input--text"
        placeholder="Escribe un nuevo mensaje..."
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.problems {
  &--list {
    &--chat {
      box-shadow: 1px 10px 15px #cccccc57;
      border-radius: 10px;
      background: #fff;
      padding: 1rem;
      min-height: calc(100vh - 400px);
      display: flex;
      flex-direction: column;
      &--wait {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding-top: 3rem;
        img {
          width: 350px;
          @media (max-width: 768px) {
            width: 150px;
          }
        }
      }
    }

    &--messages {
      flex: 1;
      &--content {
        &--message {
          &.receive {
            display: inline-block;
            padding: 1rem 1.5rem;
            background: #eaeaea;
            border-radius: 10px;
            font-weight: 600;
          }
        }
      }
    }
    &--input {
      &--text {
        width: 100%;
        border: 1px solid #f2f2f2;
        height: 40px;
        padding: 0 10px;
        font-size: 16px;
        border-radius: 10px;
        color: #000;
        &::placeholder {
          color: #ccc;
        }
      }
    }
  }
}
</style>
