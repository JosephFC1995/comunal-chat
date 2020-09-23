<template>
  <div class="problems--list">
    <ul class="problems--list--ul">
      <li
        class="problems--list--li"
        v-for="(problem, index) in $store.state.problems.problems"
        :key="index"
        @click="selectProblem(problem)"
      >
        <div class="problems--list--title">
          {{ problem.problem_subtype.name }}
        </div>
        <div class="problems--list--date">
          <span class="problems--list--date--f">
            {{ moment(problem.created_at).format('DD/MM/YYYY') }}
          </span>
          |
          <span class="problems--list--date--h">
            {{ moment(problem.created_at).format('HH:MM A') }}
          </span>
        </div>
        <div class="problems--list--location">
          <div class="problems--list--location--l">
            {{ problem.location.name }}
          </div>
          |
          <div class="problems--list--location--n">
            {{ problem.location_space.name }}
          </div>
        </div>
        <div
          class="problems--list--status"
          :class="[problem.problem_state.id == 'open' ? 'open' : 'close']"
        >
          <div
            class="problems--list--status--ico"
            :class="[problem.problem_state.id == 'open' ? 'open' : 'close']"
            v-if="problem.problem_state.id == 'open'"
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 477.867 477.867"
              style="enable-background: new 0 0 477.867 477.867"
              xml:space="preserve"
            >
              <g>
                <g>
                  <path
                    d="M238.933,0C106.974,0,0,106.974,0,238.933s106.974,238.933,238.933,238.933s238.933-106.974,238.933-238.933
			C477.726,107.033,370.834,0.141,238.933,0z M238.933,443.733c-113.108,0-204.8-91.692-204.8-204.8s91.692-204.8,204.8-204.8
			s204.8,91.692,204.8,204.8C443.611,351.991,351.991,443.611,238.933,443.733z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M238.933,85.333c-9.426,0-17.067,7.641-17.067,17.067v119.467H102.4c-9.426,0-17.067,7.641-17.067,17.067
			S92.974,256,102.4,256h136.533c9.426,0,17.067-7.641,17.067-17.067V102.4C256,92.974,248.359,85.333,238.933,85.333z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div
            class="problems--list--status--ico"
            :class="[problem.problem_state.id == 'open' ? 'open' : 'close']"
            v-else
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 426.667 426.667"
              style="enable-background: new 0 0 426.667 426.667"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M421.876,56.307c-6.548-6.78-17.352-6.968-24.132-0.42c-0.142,0.137-0.282,0.277-0.42,0.42L119.257,334.375
			l-90.334-90.334c-6.78-6.548-17.584-6.36-24.132,0.42c-6.388,6.614-6.388,17.099,0,23.713l102.4,102.4
			c6.665,6.663,17.468,6.663,24.132,0L421.456,80.44C428.236,73.891,428.424,63.087,421.876,56.307z"
                />
              </g>
            </svg>
          </div>

          <div class="problems--list--status--text">
            {{ problem.problem_state.name }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      moment,
    }
  },
  methods: {
    selectProblem(problem) {
      this.$store.commit('problems/SET_PROBLEMS_SELECTED', problem)
    },
  },
}
</script>

<style lang="scss">
.problems {
  &--list {
    box-shadow: 0 0 10px #0003;
    border-radius: 10px;
    background: #fff;
    &--ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    &--li {
      cursor: pointer;
      transition: background 0.5s;
      &:hover {
        background: #cccccc1c;
      }
      &:last-child {
        .problems--list--status {
          border-bottom: none !important;
        }
      }
    }
    &--date,
    &--location {
      display: flex;
      color: #959599;
      font-size: 14px;
      font-weight: 600;
      padding: 0 1rem;
      &--f,
      &--l {
        padding-right: 5px;
      }
      &--h,
      &--n {
        padding-left: 5px;
      }
    }
    &--title {
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 1rem;
      padding: 1.5rem 1rem 0;
    }
    &--status {
      display: flex;
      padding: 1rem;
      border-top: 2px solid #f0f0f0;
      border-bottom: 2px solid #f0f0f0;
      margin-top: 1rem;
      font-weight: 600;
      &--ico {
        font-size: 10px;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        fill: #000;
        &.open {
          fill: #1bb1d2;
        }
        svg {
          width: 15px;
          margin-right: 7px;
        }
      }
      &.open {
        color: #1bb1d2;
      }
    }
  }
}
</style>
